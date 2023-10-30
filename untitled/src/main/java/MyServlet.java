

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/MyServlet")
public class MyServlet  extends HttpServlet {
        protected void doGet(HttpServletRequest request, HttpServletResponse response)
                throws IOException, ServletException {
            // Procesa alguna lógica aquí
            String message = "{message: 'Hola desde el Servlet'}";
            response.setContentType("application/json");
            String id= request.getParameter("id");
            PrintWriter out = response.getWriter();
            //out.print(message);a
            String jsonResponse = "{\"message\": \"¡Hola desde el Servlet!_"+ id + "\"}";

            // Escribir el JSON en el PrintWriter
            out.print(jsonResponse);
            /*request.setAttribute("message", message);
            request.getRequestDispatcher("/index.jsp").forward(request, response);
             */
            out.close();
        }
    }

