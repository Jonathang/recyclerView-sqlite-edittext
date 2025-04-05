public class RegistroPrecios implements Serializable {

    private int cant;
    private String prod;
    private int prec;

    public RegistroPrecios(int cant, String prod, int prec) {
        this.cant = cant;
        this.prod = prod;
        this.prec = prec;
    }
    public RegistroPrecios(){

    }

    public int getCant() {
        return cant;
    }

    public void setCant(int cant) {
        this.cant = cant;
    }

    public String getProd() {
        return prod;
    }

    public void setProd(String prod) {
        this.prod = prod;
    }

    public int getPrec() {
        return prec;
    }

    public void setPrec(int prec) {
        this.prec = prec;
    }
}
