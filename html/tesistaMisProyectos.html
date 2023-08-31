<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Gestion de Tesis</title>

    <!-- Box Icons  -->
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="/tesista_style.css">
    <!-- Styles  -->
    <link rel="shortcut icon" href="/source/logo_unprg.png" type="image/x-icon">
</head>

<body>
    <div class="sidebar close">
        <!-- ========== Logo ============  -->
        <a href="#" class="logo-box">
            <i class='bx bx-library'></i>
            <div class="logo-name">Gestion de Tesis</div>
        </a>

        <!-- ========== List ============  -->
        <ul class="sidebar-list">
            <!-- -------- Non Dropdown List Item ------- -->
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bx-grid-alt'></i>
                        <span class="name">Tesista</span>
                    </a>
                    <!-- <i class='bx bxs-chevron-down'></i> -->
                </div>
                <div class="submenu">
                    <a href="/html/tesista.html" class="link submenu-title">Tesista</a>
                    <!-- submenu links here  -->
                </div>
            </li>
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bx-grid-alt'></i>
                        <span class="name">Mis Proyectos</span>
                    </a>
                    <!-- <i class='bx bxs-chevron-down'></i> -->
                </div>
                <div class="submenu">
                    <a href="/html/tesistaMisProyectos.html" class="link submenu-title">Mis Proyectos</a>
                    <!-- submenu links here  -->
                </div>
            </li>
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bx-grid-alt'></i>
                        <span class="name">Nuevo Proyecto</span>
                    </a>
                    <!-- <i class='bx bxs-chevron-down'></i> -->
                </div>
                <div class="submenu">
                    <a href="#" class="link submenu-title">Nuevo Proyecto</a>
                    <!-- submenu links here  -->
                </div>
            </li>            
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bx-grid-alt'></i>
                        <span class="name">Anteproyecto</span>
                    </a>
                    <!-- <i class='bx bxs-chevron-down'></i> -->
                </div>
                <div class="submenu">
                    <a href="#" class="link submenu-title">Anteproyecto</a>
                    <!-- submenu links here  -->
                </div>
            </li>
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bx-grid-alt'></i>
                        <span class="name">Informe Parcial</span>
                    </a>
                    <!-- <i class='bx bxs-chevron-down'></i> -->
                </div>
                <div class="submenu">
                    <a href="#" class="link submenu-title">Informe Parcial</a>
                    <!-- submenu links here  -->
                </div>
            </li>
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bx-grid-alt'></i>
                        <span class="name">Proyecto Final</span>
                    </a>
                    <!-- <i class='bx bxs-chevron-down'></i> -->
                </div>
                <div class="submenu">
                    <a href="#" class="link submenu-title">Proyecto Final</a>
                    <!-- submenu links here  -->
                </div>
            </li>
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bxs-user'></i>
                        <span class="name">Usuario</span>
                    </a>
                </div>
                <div class="submenu">
                    <a href="#" class="link submenu-title">Jahir Santos</a>
                    <!-- submenu links here  -->
                </div>
            </li>
            <li>
                <div class="title">
                    <a href="#" class="link">
                        <i class='bx bx-log-out'></i>
                        <span class="name">Cerrar Sesión</span>
                    </a>
                </div>
                <div class="submenu">
                    <a href="#" class="link submenu-title">Cerrar Sesión</a>
                </div>
            </li>
        </ul>
    </div>

    <!-- ============= Home Section =============== -->
    <section class="home">
        <div class="content-title">
            <div class="toggle-sidebar">
                <i class='bx bx-menu'></i>
            </div>
            <h2 class="title">Mis Proyectos</h2>
        </div>
        <table class="table ml-5">
            <thead class="table-dark">
                    <td>Título</td>
                    <td>Tipo de Proyecto</td>
                    <td>Estado</td>
                    <td>Fecha de Inicio</td>
                    <td>Operaciones</td> 
            </thead>
            <tbody>
            <?php
                require("conectar.php");
                $sentencia = $conexion->prepare("select DP.Titulo, DP.TipoProyecto,IP.Estado,IP.FechaInicio from tesista as T join proyecto as P join datosprincipales as DP join informeparcial_has_proyecto as IPH join informeparcial as IP on T.idTesista = P.idProyecto and P.idProyecto=DP.idDatosPrincipales and P.idProyecto= IPH.idInformes and IPH.idInformes=IP.idInformeParcial where T.idTesista = ?");
                $sentencia->execute();
                if($sentencia){
                    echo ("<tr>");
                    echo ("<td>" . $fila['idTesista'] . "</td>")
                    echo ("<td>" . $fila['Título'] . "</td>");
                    echo ("<td>" . $fila['Tipo de Proyecto'] . "</td>");
                    echo ("<td>" . $fila['Estado'] . "</td>");
                    echo ("<td>" . $fila['Fecha de Inicio'] . "</td>");
                    echo ("<td>" . "<a href='modificarProyectoTesista.php?idTesista={$fila['idTesista']}' class='btn btn-warning'>Modificar</a>" . "</td>");
                    echo ("</tr>");
                }
            ?>
            </tbody>
        </table>
    </section>
    <!-- Link JS -->
    <script src="/tesista_script.js"></script>
</body>
</html>