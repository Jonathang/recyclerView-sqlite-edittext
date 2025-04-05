public class SQLite_Registro extends SQLiteOpenHelper {

    public static abstract class Datos_Tabla implements BaseColumns{
        public static final String NOMBRE_TABLA = "registro_precios";
        public static final String COLUMNA_ID = "id";
        public static final String COLUMNA_CANTIDAD = "cantidad";
        public static final String COLUMNA_PRODUCTO = "producto";
        public static final String COLUMNA_PRECIO = "precio";

        private static final String CREAR_TABLA_REGISTRO_PRECIOS =
                "CREATE TABLE " + Datos_Tabla.NOMBRE_TABLA + " (" +
                        Datos_Tabla.COLUMNA_ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
                        Datos_Tabla.COLUMNA_CANTIDAD + " INT," +
                        Datos_Tabla.COLUMNA_PRODUCTO + " TEXT," +
                        Datos_Tabla.COLUMNA_PRECIO + " NUM)";

        private static final String SQL_DELETE_ENTRIES =
                "DROP TABLE IF EXISTS " + Datos_Tabla.NOMBRE_TABLA;

    }

    public static final int DATABASE_VERSION = 1;
    public static final String DATABSE_NAME = "ventasR.db";

    public SQLite_Registro(Context context) {
        super(context, DATABSE_NAME, null, DATABASE_VERSION);
    }


    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL(Datos_Tabla.CREAR_TABLA_REGISTRO_PRECIOS);

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL(Datos_Tabla.SQL_DELETE_ENTRIES);
        onCreate(db);
    }
}
