public class Registro extends Fragment {
    
    ArrayList<RegistroPrecios> listaRegistro;
    private RecyclerView recyclerViewRegistro;

    EditText cantidad, producto, precio;
    Button guardar;



    public Registro() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_registro, container, false);

        cantidad = v.findViewById(R.id.etcantidad);
        producto = v.findViewById(R.id.etproducto);
        precio = v.findViewById(R.id.etprecio);
        guardar = v.findViewById(R.id.boton_guardar_registro);

        listaRegistro=new ArrayList<>();
        recyclerViewRegistro = v.findViewById(R.id.reciclador_registro);
        recyclerViewRegistro.setLayoutManager(new LinearLayoutManager(getActivity()));

        ConsultarRegistros();
        MyAdapterRegistro adapter = new MyAdapterRegistro(listaRegistro);
        recyclerViewRegistro.setAdapter(adapter);


        guardar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ingresarDatos();


            }
        });
        return v;

    }

    public void ingresarDatos(){
        final SQLite_Registro sqLite_registro = new SQLite_Registro(getActivity());

        SQLiteDatabase db = sqLite_registro.getWritableDatabase();
        ContentValues valores = new ContentValues();
        valores.put(SQLite_Registro.Datos_Tabla.COLUMNA_CANTIDAD, cantidad.getText().toString().trim());
        valores.put(SQLite_Registro.Datos_Tabla.COLUMNA_PRODUCTO, producto.getText().toString().trim());
        valores.put(SQLite_Registro.Datos_Tabla.COLUMNA_PRECIO, precio.getText().toString().trim());

        long newRowId = db.insert(SQLite_Registro.Datos_Tabla.NOMBRE_TABLA, null, valores);
        Toast.makeText(getActivity(), "Agregado con éxito !!!"+ " "+ newRowId, Toast.LENGTH_LONG).show();

        cantidad.setText(" ");
        producto.setText(" ");
        precio.setText(" ");

    }

    public void ConsultarRegistros(){
        //se abre la base de datos
        final SQLite_Registro sqLite_registro = new SQLite_Registro(getActivity());
        SQLiteDatabase db = sqLite_registro.getReadableDatabase();

       RegistroPrecios registroPrecios =null;
        Cursor c = db.rawQuery("SELECT * FROM " + SQLite_Registro.Datos_Tabla.NOMBRE_TABLA, null);

        while(c.moveToNext()){
            registroPrecios = new RegistroPrecios();
            registroPrecios.setCant(c.getInt(1));// se inicia en la columna 1 porque la columna 0 es los Ids autoincremtables
            registroPrecios.setProd(c.getString(2));
            registroPrecios.setPrec(c.getInt(3));

            listaRegistro.add(registroPrecios);
        }

    }



}
