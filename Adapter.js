public class MyAdapterRegistro extends RecyclerView.Adapter<MyAdapterRegistro.RegistroViewHolder> {
    //Arraylist proviene del getter y setter
    ArrayList<RegistroPrecios> arrayregistro;

    public MyAdapterRegistro(ArrayList<RegistroPrecios> arrayregistro) {
        this.arrayregistro = arrayregistro;
    }

    //introducir el layout que contiene los items de como se vera
    @Override
    public RegistroViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_lista_ventas,null,false);
        return new RegistroViewHolder(view);
    }

    @Override
    public void onBindViewHolder(RegistroViewHolder holder, int position) {
        //se mencionan los Textview de item lista en caso de que sean enteros se maneja String.valueof() y al ultimo se menciona
        //el getter
        holder.tvcantidad.setText(String.valueOf(arrayregistro.get(position).getCant()));
        holder.tvproducto.setText(arrayregistro.get(position).getProd());
        holder.tvprecio.setText(String.valueOf(arrayregistro.get(position).getPrec()));
    }

    @Override
    public int getItemCount() {
        return arrayregistro.size();
    }
    
    
    // Nueva clase para castear los Textview de item lista
    public class RegistroViewHolder extends RecyclerView.ViewHolder {

        TextView tvcantidad,tvproducto,tvprecio;

        public RegistroViewHolder(View itemView) {
            super(itemView);
            tvcantidad = itemView.findViewById(R.id.tvcantidad);
            tvproducto = itemView.findViewById(R.id.tvproducto);
            tvprecio   = itemView.findViewById(R.id.tvprecio);
        }
    }
}
