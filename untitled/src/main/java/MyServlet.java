

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/MyServlet")
public class MyServlet  extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Bloque estático compartido entre hilos
    private static final List<Integer> servletIds = new ArrayList<>();
    private static final List<Integer> hashCodes = new ArrayList<>();
    private static int instanceCount = 0;

    public MyServlet() {
        super();
        synchronized (servletIds) {
            servletIds.add(++instanceCount);
        }
        synchronized (hashCodes) {
            hashCodes.add(System.identityHashCode(this));
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        synchronized (servletIds) { // monitor de sincronización
            out.println("ID de la instancia actual: " + instanceCount);
            out.println("IDs de todas las instancias activas: " + servletIds);
            out.println("Número de hilos concurrentes: " + servletIds.size());
        }
        int currentHashCode = System.identityHashCode(this);
        synchronized (hashCodes) {
            out.println("Hash de la instancia actual: " + currentHashCode);
            out.println("Hashes de todas las instancias: " + hashCodes);
            out.println("Número total de instancias: " + hashCodes.size());
        }

    }
}

// http://192.168.104.50:8080/untitled/MyServlet?