import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpListPage } from '../help-list/help-list';
import { ConsultationDetailsPage } from '../consultation-details/consultation-details';
import { HelpServiceProvider } from "../../providers/help-service/help-service";

import { ModalTestPage } from '../modal-test/modal-test';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  helpInfo: any;
  helpLastConsultationInfo: any;
  HelpInfo = [
    {
      "name": "Tu última consulta",
      "content": [
        {
          "img": "assets/imgs/ultimoViaje.png",
          "date": "b",
          "total": "c",
          "map": "d"
        }
      ]
    },
    {
      "name": "Opciones de cuenta y pago",
      "content": [
        {
          "name": "No puedo iniciar sesión",
          "content": [
            {
              "name": "Olvidé mi contraseña",
              "content": [
                {
                  "title": "Olvidé mi contraseña",
                  "text": ["<p>Si olvidas tu contrase&ntilde;a, accede al siguiente enlace para restablecerla. Deber&aacute;s introducir la direcci&oacute;n de email o el n&uacute;mero de m&oacute;vil asociado a tu cuenta de Dr.Chapp.</p>",
                    "<p>Recibir&aacute;s un email en unos minutos. El email incluye un enlace para restablecer la contrase&ntilde;a que solo se puede utilizar una vez. Si no abres el enlace en un plazo de 10 minutos, tendr&aacute;s que volver a empezar para recibir un enlace nuevo.</p>",
                    "<p>Recomendamos utilizar una contrase&ntilde;a exclusiva para Dr.Chapp. No compartas tu contrase&ntilde;a por email ni por ning&uacute;n otro medio. El equipo de soporte de Dr.Chapp nunca te preguntar&aacute; la contrase&ntilde;a.</p>",
                    "<p>Si no puedes restablecer la contrase&ntilde;a o acceder a tu cuenta, contacta con nosotros a trav&eacute;s de Cuenta y pago &gt; No puedo iniciar sesi&oacute;n &gt; El enlace para restablecer mi contrase&ntilde;a no funciona.</p>",
                    "<p><u>Olvid&eacute; mi contrase&ntilde;a</u></p>"
                  ]
                }
              ]
            },
            {
              "name": "El enlace para restablecer mi contraseña no funciona",
              "content": [
                {
                  "title": "El enlace para restablecer mi contraseña no funciona",
                  "text": [ "<p>Al contactar con nosotros para restablecer la contrase&ntilde;a de tu cuenta de Dr.Chapp, te enviaremos un correo electr&oacute;nico en pocos minutos. En este correo encontrar&aacute;s un enlace que te ayudar&aacute; a restablecer la contrase&ntilde;a.&nbsp;</p>",
                    "<p>Por razones de seguridad, este enlace caducar&aacute; pasados 10 minutos. Abre el enlace de inmediato o no lo solicites hasta que no est&eacute;s listo para continuar con el proceso de restablecimiento de la contrase&ntilde;a.</p>",
                    "<p>Si el enlace no funciona, visita Dr.Chapp.com/forgot-password para volver a empezar. Comprueba que tu direcci&oacute;n de correo sea la correcta y despu&eacute;s abre el enlace del correo electr&oacute;nico que te enviaremos.&nbsp;</p>",
                    "<p>Si no puedes restablecer la contrase&ntilde;a o acceder a tu cuenta, por favor, comparte m&aacute;s informaci&oacute;n.</p>"
                  ]
                }
              ]
            },
            {
              "name": "No puedo iniciar sesión en mi cuenta",
              "content": [
                {
                  "title": "No puedo iniciar sesión en mi cuenta",
                  "text": ["<p>Si no puedes iniciar sesi&oacute;n en tu cuenta porque has olvidado tu contrase&ntilde;a, haz clic en el enlace siguiente para restablecerla.</p>",
                    "<p><u>FORGOT PASSWORD</u></p>"
                  ]
                }
              ]
            },
            {
              "name": "Liquidar mi saldo pendiente",
              "content": [
                {
                  "title": "Liquidar mi saldo pendiente",
                  "text": [ "<p>Si se rechaza un pago de Dr.Chapp, es posible que aparezca una ficha de Pago en tu pantalla de informaci&oacute;n de Dr.Chapp.</p>",
                    "<p>La app te solicitar&aacute; cobrar el saldo pendiente al m&eacute;todo de pago de tu elecci&oacute;n antes de pedir un viaje.</p>",
                    "<p>Para pagar un saldo pendiente, realiza los siguientes pasos:</p>",
                    "<ol>",
                      "<li>Toca la ficha en tu pantalla de informaci&oacute;n.</li>",
                      "<li>Selecciona Ver opciones de pago. Selecciona el tipo de pago. Nota: Es posible que debas actualizar tus m&eacute;todos de pago.</li>",
                    "</ol>",
                    "<p>Tambi&eacute;n podr&aacute;s pagar el saldo en efectivo en el pr&oacute;ximo viaje que elijas efectivo como m&eacute;todo de pago. Para pagar en efectivo, selecciona Pagar en efectivo al pr&oacute;ximo conductor y, luego, Confirmar. El saldo pendiente se agregar&aacute; a la tarifa de tu pr&oacute;ximo viaje.</p>"
                  ]
                }
              ]
            },
            {
              "name": "¿Por qué se rechazó mi pago?",
              "content": [
                {
                  "title": "¿Por qué se ha rechazado mi pago?",
                  "text": [ "<p>No ser&aacute; posible pedir otro viaje si tu tarjeta de cr&eacute;dito o d&eacute;bito rechaz&oacute; tu pago de un viaje anterior.</p>",
                    "<p>Si tu app muestra uno de los siguientes mensajes de error, el banco de tu m&eacute;todo de pago seleccionado puede haber rechazado el pedido de transacci&oacute;n.</p>",
                    "<ul>",
                      "<li>&quot;Error de pedido: tarjeta rechazada&quot;</li>",
                      "<li>&quot;Tu m&eacute;todo de pago no es v&aacute;lido. Actualiza tu configuraci&oacute;n de pago&quot;</li>",
                      "<li>&quot;Ocurri&oacute; un error al procesar tu pedido&quot;</li>",
                    "</ul>"
                  ]
                }
              ]
            },
            {

              "name": "No recibo el SMS para verificar mi número",
              "content": [
                {
                  "title": "No recibo el SMS para verificar mi número",
                  "text": [ "<p>Para inscribirte como usuario de Dr.Chapp es necesario que verifiques tu n&uacute;mero de celular. Si no recibiste el mensaje de verificaci&oacute;n, intenta lo siguiente:</p>",
                    "<ol>",
                      "<li>Asegurate que el n&uacute;mero de tel&eacute;fono sea el mismo en el que tienes instalada el app.</li>",
                      "<li>Asegurate tambi&eacute;n de que el n&uacute;mero (excluyendo el +52 de la lada de M&eacute;xico) sea de 11 d&iacute;gitos. Ejemplo: +52 ( 1 55 2299 4072 ) para Ciudad de M&eacute;xico.</li>",
                      "<li>Valida que el pa&iacute;s seleccionado antes del n&uacute;mero sea el correcto.</li>",
                      "<li>Busca una buena conexi&oacute;n de datos de Wi-Fi &oacute; m&oacute;vil. Comprueba que los mismos est&eacute;n activados.</li>",
                      "<li>Cierra y vuelve a abrir la aplicaci&oacute;n e intenta de nuevo la verificaci&oacute;n.</li>",
                    "</ol>"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Configuración de cuenta y calificaciones",
          "content": [
            {
              "name": "Actualiza la configuración de la cuenta",
              "content": [
                {
                  "title": "Actualiza la configuración de la cuenta",
                  "text": [ "<p>Para actualizar tu nombre, email, tel&eacute;fono y contrase&ntilde;a:</p>",
                    "<p>Selecciona &quot;Ajustes&quot; en el men&uacute; principal de la aplicaci&oacute;n</p>",
                    "<p>Pulsa en la barra que muestra la informaci&oacute;n de tu perfil</p>",
                    "<p>Pulsa en los datos que quieras cambiar</p>",
                    "<p>Modifica los datos y haz clic en Guardar</p>",
                    "<p>Si cambias tu n&uacute;mero de tel&eacute;fono, recibir&aacute;s un mensaje de texto con el c&oacute;digo de verificaci&oacute;n. Introduce el c&oacute;digo en la aplicaci&oacute;n para confirmar el cambio.&nbsp;</p>",
                    "<p>Si cambias la contrase&ntilde;a, se te pedir&aacute; que introduzcas la contrase&ntilde;a actual. Las contrase&ntilde;as deben tener una longitud m&iacute;nima de 5 caracteres.</p>",
                    "<p><u>HAS OLVIDADO TU CONTRASE&Ntilde;A</u></p>",
                    "<p>Para cambiar o a&ntilde;adir una imagen de perfil, pulsa en tu foto o en el c&iacute;rculo vac&iacute;o. Si tienes una cuenta de conductor, podr&aacute;s actualizar tu foto de perfil desde esta.</p>"
                  ]
                }
              ]
            },
            {
              "name": "No puedo actualizar mi número de teléfono móvil o correo electrónico",
              "content": [
                {
                  "title": "No puedo actualizar mi móvil o email",
                  "text": [ "<p>Si recibes un error al intentar cambiar tu email o n&uacute;mero de m&oacute;vil porque tu informaci&oacute;n ya est&aacute; registrada, rellena el siguiente formulario.</p>",
                    "<p><u>FORMULARIO</u></p>"
                  ]
                }
              ]
            },
            {
              "name": "¿Cómo se determina mi calificación?",
              "content": [
                {
                  "title": "¿Cómo se determina mi calificación?",
                  "text": [ "<p>Despu&eacute;s de cada viaje, los pasajeros y los conductores tienen la oportunidad de valorar su experiencia de viaje de 1 a 5 estrellas.</p>",
                    "<p>La valoraci&oacute;n general de un pasajero o conductor es un promedio de las &uacute;ltimas valoraciones recibidas. Por ejemplo, un pasajero con muy buena nota puede tener 4,9 estrellas.</p>",
                    "<p>Esta valoraciones son an&oacute;nimas. Ni los pasajeros ni los conductores podr&aacute;n ver una valoraci&oacute;n individual asociada a una persona o a un viaje concreto. Los comentarios sinceros, constructivos y respetuosos son beneficiosos para todo el mundo.</p>",
                    "<p>Proporcionar una calificaci&oacute;n fomenta el respeto mutuo entre los pasajeros y conductores. Esto fortalece la comunidad y ayudar a todos a conseguir lo mejor de Dr.Chapp. Gracias por tu participaci&oacute;n.</p>",
                    "<p>C&Oacute;MO FUNCIONAN LAS VALORACIONES</p>"
                  ]
                }
              ]
            },
            {
              "name": "Me gustaría conocer mi calificación",
              "content": [
                {
                  "title": "Me gustaría saber cuál es mi valoración",
                  "text": [ "<p>Tras cada viaje, los pasajeros y conductores pueden valorarse mutuamente en funci&oacute;n de su experiencia de viaje.</p>",
                    "<p>El sistema de valoraci&oacute;n permite garantizar que solo los pasajeros y conductores m&aacute;s respetuosos sean parte de Uber. Las valoraciones son siempre promedios. Ni los conductores ni los pasajeros podr&aacute;n ver la valoraci&oacute;n de un viaje concreto.</p>",
                    "<p>Para ver tu valoraci&oacute;n:&nbsp;</p>",
                    "<p>Abre la aplicaci&oacute;n y entra en el men&uacute;</p>",
                    "<p>Tu valoraci&oacute;n es el n&uacute;mero que aparece bajo tu nombre</p>",
                    "<p>Es necesario hacer 5 viajes para tener una valoraci&oacute;n de pasajero. Si no ves ninguna valoraci&oacute;n, seguramente sea porque no has hecho suficientes viajes</p>"
                  ]
                }
              ]
            },
            {
              "name": "No estoy recibiendo recibos ni correos electrónicos",
              "content": [
                {
                  "title": "No me llegan recibos ni emails",
                  "text": [ "<p>Si no te llegan los recibos o emails de Dr.Chapp, comprueba la carpeta de correo no deseado de tu cuenta. Si encuentras en ella emails de &nbsp;Dr.Chapp, marca la carpeta como &quot;no es correo no deseado&quot; para que te lleguen los mensajes futuros.</p>",
                    "<p>Tambi&eacute;n puedes actualizar en cualquier momento la direcci&oacute;n de email de la cuenta de &nbsp;Dr.Chapp:</p>",
                    "<p>Selecciona &quot;Configuraci&oacute;n&quot; en el men&uacute; de la aplicaci&oacute;n.&nbsp;</p>",
                    "<p>Pulsa en la direcci&oacute;n de email situada junto a tu foto de perfil.</p>",
                    "<p>Podr&aacute;s editar tu nombre, n&uacute;mero de tel&eacute;fono y direcci&oacute;n de email.</p>",
                    "<p>Pulsa GUARDAR cuando hayas terminado.</p>",
                    "<p>Para revisar los recibos de viaje, selecciona &quot;Tus consultas&quot; en el men&uacute; de la aplicaci&oacute;n. Pulsa el mapa de cualquier viaje y, a continuaci&oacute;n, RECIBO para revisar el precio y la forma de pago.</p>"
                  ]
                }
              ]
            },
            {
              "name": "Eliminar mi cuenta",
              "content": [
                {
                  "title": "Eliminar mi cuenta Dr.Chapp",
                  "text": [ "<p>Una vez que eliminas tu cuenta Dr.Chapp, existe un breve per&iacute;odo de tiempo (menos de 4 semanas) en que podremos restaurar tu cuenta. Despu&eacute;s de ese per&iacute;odo, tu cuenta se cerrar&aacute; y ser&aacute; irrecuperable.</p>",
                    "<p>Si deseas eliminar tu cuenta, te ayudaremos aqu&iacute;. Ten en cuenta que, una vez que pulses ENVIAR, la eliminaci&oacute;n de la cuenta proceder&aacute; sin otras instancias de confirmaci&oacute;n.</p>",
                    "<p>Si tienes un problema con tu cuenta, pago o dispositivo, inf&oacute;rmanos para que podamos ayudarte a resolverlo.</p>"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Administrar mis métodos de pago",
          "content": [
            {
              "name": "Actualizar el método de pago en la cuenta",
              "content": [
                {
                  "title": "Actualizar una forma de pago en mi cuenta",
                  "text": [ "<p>Al a&ntilde;adir y seleccionar una forma de pago podr&aacute;s solicitar viajes. Seg&uacute;n tu pa&iacute;s y ciudad, puedes a&ntilde;adir formas de pago tales como tarjetas de cr&eacute;dito, efectivo o una cuenta de PayPal. Cuando finaliza un viaje, el cargo se realiza seg&uacute;n la forma de pago predeterminada que has seleccionado.&nbsp;</p>",
                    "<p>Puedes utilizar la aplicaci&oacute;n durante un viaje para cambiar la forma de pago seleccionada. Desliza hacia arriba desde la parte inferior de la aplicaci&oacute;n y pulsa en la forma de pago deseada antes de que finalice el viaje.</p>",
                    "<p>A&Ntilde;ADIR UNA FORMA DE PAGO</p>",
                    "<p>Selecciona &ldquo;Pago&rdquo; en el men&uacute; de la aplicaci&oacute;n. Pulsa A&ntilde;adir pago A&ntilde;ade una forma de pago escaneando tu tarjeta, introduciendo manualmente los datos de tu tarjeta o eligiendo otro tipo de pago.</p>",
                    "<p>ESCANEAR UNA TARJETA DE CR&Eacute;DITO O D&Eacute;BITO</p>",
                    "<ol>",
                      "<li>Para escanear una tarjeta, pulsa en el icono de c&aacute;mara. Puede que el tel&eacute;fono te pida permiso para que la aplicaci&oacute;n Uber use la c&aacute;mara.</li>",
                      "<li>Centra la tarjeta en la pantalla del tel&eacute;fono de forma que las 4 esquinas brillen en verde. Las tarjetas con letras y n&uacute;meros en relieve suelen ser m&aacute;s f&aacute;ciles de escanear.&nbsp;</li>",
                      "<li>Escribe la fecha de caducidad de la tarjeta, el n&uacute;mero CVV y el c&oacute;digo postal de facturaci&oacute;n.&nbsp;</li>",
                      "<li>Pulsa GUARDAR.</li>",
                    "</ol>",
                    "<p>A&Ntilde;ADIR MANUALMENTE UNA TARJETA DE CR&Eacute;DITO O D&Eacute;BITO</p>",
                    "<ol>",
                      "<li>Escribe el n&uacute;mero de tu tarjeta.&nbsp;</li>",
                      "<li>Escribe la fecha de caducidad, el n&uacute;mero CVV y el c&oacute;digo postal de facturaci&oacute;n.&nbsp;</li>",
                      "<li>Pulsa GUARDAR.</li>",
                    "</ol>",
                    "<p>ACTUALIZAR LA INFORMACI&Oacute;N DE LA TARJETA&nbsp;</p>",
                    "<p>Puedes modificar la fecha de caducidad, el n&uacute;mero CCV y el c&oacute;digo postal de facturaci&oacute;n de una tarjeta de d&eacute;bito o cr&eacute;dito.&nbsp;</p>",
                    "<ol>",
                      "<li>Selecciona &quot;Pago&quot; en el men&uacute; de la aplicaci&oacute;n.&nbsp;</li>",
                      "<li>Selecciona la opci&oacute;n de pago que quieres actualizar.&nbsp;</li>",
                      "<li>Pulsa el icono de tres puntos y pulsa para editar. &nbsp;</li>",
                      "<li>Haz los cambios y pulsa GUARDAR cuando hayas terminado.</li>",
                    "</ol>",
                    "<p>Aunque no es posible modificar el n&uacute;mero de una tarjeta de cr&eacute;dito o d&eacute;bito, se puede eliminar una tarjeta de la cuenta y volverla a a&ntilde;adir como nueva forma de pago. Sigue leyendo para obtener m&aacute;s informaci&oacute;n.</p>",
                    "<p>Si tienes un perfil de Dr.Chapp para empresas, tambi&eacute;n puedes cambiar el perfil al que est&aacute; asociado tu tarjeta seleccionando Configuraci&oacute;n en el men&uacute;. Selecciona el perfil y el m&eacute;todo de pago que quieras asociar a tu perfil.</p>",
                    "<p>ELIMINAR UNA FORMA DE PAGO</p>",
                    "<p>Tu cuenta debe tener al menos una forma de pago en todo momento. Si quieres eliminar tu &uacute;nica forma de pago, antes tendr&aacute;s que a&ntilde;adir otra. &nbsp;</p>",
                    "<ol>",
                      "<li>Selecciona &quot;Pago&quot; en el men&uacute;.&nbsp;</li>",
                      "<li>Selecciona la tarjeta que quieres eliminar.&nbsp;</li>",
                      "<li>Pulsa el icono de tres puntos en la esquina superior derecha.&nbsp;</li>",
                      "<li>Pulsa ELIMINAR y confirma.</li>",
                    "</ol>"
                  ]
                }
              ]
            },
            {
              "name": "Tengo otra pregunta sobre pagos",
              "content": [
                {
                  "title": "Tengo otra pregunta sobre el pago",
                  "text": [ "<p>Si tienes una pregunta sobre pagos y no has encontrado la respuesta en la secci&oacute;n Cuenta y opciones de pago, h&aacute;znoslo saber para que podamos ayudarte.</p>",
                    "<p>Cuanta m&aacute;s informaci&oacute;n nos facilites, antes podremos ayudarte.</p>"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Tengo un cargo desconocido",
          "content": [
            {
              "name": "¿Por qué hay un cargo pendiente en mi cuenta de pago?",
              "content": [
                {
                  "title": "¿Por qué hay un pago pendiente en mi cuenta?",
                  "text": [ "<p>Al a&ntilde;adir por primera vez una forma de pago a tu cuenta de Uber o al dejar de utilizar una forma de pago durante varios d&iacute;as, Uber realizar&aacute; una autorizaci&oacute;n de cargo temporal para verificar el m&eacute;todo de pago.&nbsp;</p>",
                    "<p>Los cargos de autorizaci&oacute;n son peque&ntilde;as cantidades de dinero que nunca se cargan en la cuenta. Sin embargo, estas cantidades pueden figurar como pendientes.Al principio de un viaje, Uber puede cargar mediante tu forma de pago una retenci&oacute;n de autorizaci&oacute;n temporal equivalente a la estimaci&oacute;n del precio del viaje. Aparecer&aacute; como cargo &quot;pendiente&quot; en el extracto de tu cuenta. Cuando el viaje finalice, la retenci&oacute;n de autorizaci&oacute;n se transformar&aacute; en un cargo correspondiente al precio final del viaje.&nbsp;</p>",
                    "<p>Si el viaje se cancela o su precio final es distinto al estimado por la aplicaci&oacute;n, la retenci&oacute;n de autorizaci&oacute;n original se anular&aacute; al cabo de unos d&iacute;as en funci&oacute;n de las normas aplicadas por tu banco. Si quieres confirmar un cargo espec&iacute;fico, ponte en contacto directamente con tu banco</p>"
                  ]
                }
              ]
            },
            {
              "id": "option1",
              "name": "¿Por qué se actualizó mi recibo?",
              "content": [
                {
                  "title": "¿Por qué se ha actualizado mi recibo?",
                  "text": [ "<p>Si ajustamos un precio, te enviaremos un email con el recibo de tu viaje actualizado. Debido a esto, te llegar&aacute; un nuevo recibo.</p>",
                    "<p>Los ajustes se pueden realizar por diferentes motivos. Podr&aacute;s ver los ajustes espec&iacute;ficos realizados en el cuadro de comentarios del recibo actualizado</p>",
                    "<p>Si se ha hecho un ajuste y te gustar&iacute;a saber por qu&eacute;, h&aacute;znoslo saber. Utiliza la aplicaci&oacute;n entra en la secci&oacute;n de Tus viajes y selecciona el viaje, en la secci&oacute;n de Ayuda del viaje pulsa Facturaci&oacute;n y recibos &gt; Se ha actualizado el recibo de mi viaje.</p>"

                  ]
                }
              ]
            },
            {
              "id": "option1",
              "name": "Tengo un cargo duplicado",
              "content": [
                {
                  "title": "Tengo un cargo duplicado",
                  "text": [ "<p>A veces, en tu cuenta de Uber o en la de pagos pueden aparecer dos o m&aacute;s cargos id&eacute;nticos con el mismo importe. En estos casos, te recomendamos confirmar que no has hecho diferentes viajes que tengan el mismo precio.</p>",
                    "<p>Si crees que el cargo est&aacute; duplicado, te recomendamos comprobar que no sea el importe de un viaje o de un ajuste. Selecciona Tus viajes en el men&uacute; de la aplicaci&oacute;n para revisar el historial de viajes o inicia sesi&oacute;n en riders.uber.com. Si el precio de un viaje se llegara a modificar por alg&uacute;n motivo, te enviaremos un recibo actualizado.</p>",
                    "<p>A veces, Uber retiene temporalmente un importe en tu forma de pago cuando empieza un viaje para garantizar por adelantado el pago de su precio. Dicho importe inicial aparecer&aacute; como &quot;Pendiente&quot; en tu cuenta. Aunque la retenci&oacute;n se anula de inmediato en nuestro sistema, puede permanecer cierto tiempo en tu cuenta debido a la pol&iacute;tica de tu banco.</p>",
                    "<p>Si quieres que investiguemos cargos duplicados, confirma los importes y las fechas. Revisaremos tu caso y contactaremos directamente contigo.</p>"
                  ]
                }
              ]
            },
            {
              "id": "option1",
              "name": "Creo que sabotearon mi cuenta",
              "content": [
                {
                  "title": "Creo que se ha producido un acceso no autorizado a mi cuenta",
                  "text": [ "<p>Si sospechas que alguien ha entrado en tu cuenta de Dr.Chapp o la ha utilizado sin autorizaci&oacute;n, es posible que tu cuenta est&eacute; en peligro.</p>",
                    "<p>Las situaciones que indican que tu cuenta de Uber est&aacute; en peligro son: - Solicitudes de viaje en tu cuenta que t&uacute; no has realizado personalmente - Viajes completados en tu cuenta que t&uacute; no has solicitado ni realizado - Llamadas o mensajes de texto de conductores que quieren recogerte sin que hayas solicitado ning&uacute;n viaje - Recibos de viajes que no has solicitado - Cambios en los datos de tu cuenta que t&uacute; no has realizado - Imposibilidad de iniciar sesi&oacute;n en tu cuenta - Imposibilidad de encontrar la direcci&oacute;n de correo electr&oacute;nico con la que inicias sesi&oacute;n</p>",
                    "<p>Si no puedes iniciar sesi&oacute;n en tu cuenta por otro motivo, selecciona Ayuda en el men&uacute; de la aplicaci&oacute;n y elige Cuneta y opciones de pago &gt; No he podido iniciar sesi&oacute;n &gt; He olvidado mi contrase&ntilde;a. Crea una nueva contrase&ntilde;a que sea exclusiva.</p>",
                    "<p><u>HE OLVIDADO MI CONTRASE&Ntilde;A</u></p>"
                  ]
                }
              ]
            },
            {
              "id": "option1",
              "name": "Mi cuenta tiene un cargo no reconocido",
              "content": [
                {
                  "title": "Mi cuenta tiene un cargo desconocido",
                  "text": [ "<p>A menudo, los cargos desconocidos se deben a que un amigo, compa&ntilde;ero de trabajo o familiar utiliza tu informaci&oacute;n de pago o una cuenta vinculada.&nbsp;</p>",
                    "<p>Sin embargo, si crees que este no es el motivo de que haya un cargo desconocido de Uber en tu cuenta, h&aacute;znoslo saber aqu&iacute;. Revisaremos tu caso y haremos el seguimiento oportuno.</p>",
                    "<p>Nota: Si tienes m&aacute;s de un cargo desconocido, solo hace falta que nos informes de uno de ellos. No es necesario rellenar este formulario varias veces.</p>"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Facturación",
          "content": [
            {
              "name": "¿Como buscar y descargar las facturas ya emitidas?",
              "content": [
                {
                  "title": "¿Como buscar y descargar las facturas ya emitidas?",
                  "text": [ "<p>Por favor ingresa al enlace de Uber Facturas con el email que usas en la aplicaci&oacute;n de UBER y los mismos 4 &uacute;ltimos d&iacute;gitos de la tarjeta de cr&eacute;dito o en caso de que tu pago haya sido realizado con Paypal o Efectivo deber&aacute;s de ingresar los &uacute;ltimos 4 d&iacute;gitos de tu tel&eacute;fono celular.&nbsp;</p>",
                    "<p>Uber Facturas&nbsp;</p>",
                    "<p>Te aparecer&aacute; un recuadro en la parte superior de la pantalla donde dice &quot;Actualmente tienes xxx facturas emitidas.&nbsp;</p>",
                    "<p>Si deseas visualizarlas da click aqui&quot; . Este es el bot&oacute;n que al dar click te mostrar&aacute; tus viajes facturados. Podr&aacute;s visualizarlos inclusive por mes de emisi&oacute;n navegando con las flechas laterales de la p&aacute;gina. Podr&aacute;s descargar nuevamente tus facturas CFDI o bien generar un nuevo ZIP con todos los documentos.&nbsp;</p>",
                    "<p>Las facturas emitidas solamente estar&aacute;n disponibles para descargar por 90 d&iacute;as.</p>"
                  ]
                }
              ]
            },
            {
              "name": "¿Como modificar mis datos fiscales?",
              "content": [
                {
                  "title": "¿Como modificar mis datos fiscales?",
                  "text": [ "<p>Es importante que tengas en cuenta que solo podemos cancelar y modificar facturas de no m&aacute;s de 30 d&iacute;as naturales y que se encuentren dentro del mes corriente.&nbsp;</p>",
                  "<p>Para poder cambiar tus datos fiscales, solo debes de ingresar al sistema como normalmente lo haces desde:&nbsp;</p>",
                  "<p>Uber Facturas&nbsp;</p>",
                  "<p>Utilizando tu email registrado en la aplicaci&oacute;n de Uber y los &uacute;ltimos 4 d&iacute;gitos de la tarjeta cr&eacute;dito o los &uacute;ltimos 4 d&iacute;gitos de tu tel&eacute;fono celular si pagaste con Paypal o Efectivo. Si no tienes viajes pendientes y ya has facturado previamente, te permitir&aacute; cambiar tus datos de facturaci&oacute;n.</p>"
                  ]
                }
              ]
            },
            {
              "name": "Tengo problemas con mi factura",
              "content": [
                {
                  "title": "Tengo problemas con mi factura",
                  "text": [ "<p>Algunos consejos:&nbsp;</p>",
                    "<ol>",
                      "<li>Tienes que estar registrado en el sistema de facturas www.Dr.Chapp.com&nbsp;</li>",
                      "<li>Debe de estar dado de alta el m&eacute;todo de pago de la cuenta que realiz&oacute; el viaje a facturar con el mail que tienes registrado en la aplicaci&oacute;n, o donde te llegan los recibos.&nbsp;</li>",
                      "<li>Recuerda que tienes que esperar 48 horas despu&eacute;s de tu viaje para expedir tu factura.&nbsp;</li>",
                    "</ol>",
                    "<p>Si a&uacute;n con estos tips, tienes problemas escr&iacute;benos aqu&iacute; para que te apoyemos:</p>"
                  ]
                }
              ]
            },
            {
              "name": "No puedo emitir mi factura",
              "content": [
                {
                  "title": "No puedo emitir mi factura",
                  "text": [ "<p>Algunos consejos son:&nbsp;</p>",
                    "<p>1. Verifica que hayas registrado tu &quot;Perfil fiscal&quot; para cada m&eacute;todo de pago relacionado con tu cuenta de Uber.&nbsp;</p>",
                    "<p>2. Toma en cuenta que los c&oacute;digos promocionales o &quot;Dr.Chapp credits&quot; no pueden ser facturados.&nbsp;</p>",
                    "<p>3. El viaje que deseas facturar haya sido realizado en territorio mexicano.&nbsp;</p>",
                    "<p>4. El viaje debe haber sido pagado.&nbsp;</p>",
                    "<p>Si a&uacute;n con estos consejos tienes problemas, escr&iacute;benos aqu&iacute; y con gusto verificaremos tu solicitud.</p>"
                  ]
                }
              ]
            },
            {
              "name": "Tengo una factura duplicada",
              "content": [
                {
                  "title": "Tengo una factura duplicada",
                  "text": [ "<p>Antes de continuar por favor toma en cuenta:&nbsp;</p>",
                  "<ol>",
                    "<li>S&oacute;lo pueden ser canceladas las facturas del mes corriente o que no sean mayores a 30 d&iacute;as.&nbsp;</li>",
                    "<li>Verifica la informaci&oacute;n que deseas cancelar con detalle, una vez eliminadas no hay nada que podamos hacer para recuperarlas.&nbsp;</li>",
                    "<li>Si alguna de tus facturas piensas que est&aacute;n duplicadas, verifica el monto de estas, es posible que est&eacute;s tomando en cuenta la factura previa a alg&uacute;n ajuste.</li>",
                  "</ol>"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "¿Cómo actualizó mi número de teléfono móvil o correo electrónico?",
          "content": [
            {
              "title": "¿Cómo actualizó mi número de teléfono móvil o correo electrónico?",
              "text": [ "<p>Para actualizar tu nombre, correo electr&oacute;nico, n&uacute;mero de tel&eacute;fono y contrase&ntilde;a:&nbsp;</p>",
                "<ol>",
                  "<li>Selecciona &quot;Configuraci&oacute;n&quot; en el men&uacute; principal de la app&nbsp;</li>",
                  "<li>Toca la barra que muestra tu informaci&oacute;n de perfil&nbsp;</li>",
                  "<li>Toca la informaci&oacute;n que quieres cambiar.&nbsp;</li>",
                  "<li>Actualiza los datos y haz clic en Guardar.&nbsp;</li>",
                "</ol>",
                "<p>Si cambias tu n&uacute;mero de tel&eacute;fono, recibir&aacute;s un c&oacute;digo de verificaci&oacute;n a trav&eacute;s de un mensaje de texto. Ingresa el c&oacute;digo en la app para confirmar el cambio.&nbsp;</p>",
                "<p>Si cambias la contrase&ntilde;a, se te pedir&aacute; que ingreses tu contrase&ntilde;a actual. Las contrase&ntilde;as deben tener 5 caracteres.</p>",
                "<p><u> &iquest;Qu&eacute; pasa s&iacute; tengo un n&uacute;mero de tel&eacute;fono extranjero? </u></p>",
                "<p>&iexcl;Nada! El proceso es exactamente igual. &Uacute;nicamente debes asegurarte de tener cobertura de tu operadora en el lugar en el que te encuentres.&nbsp;</p>",
                "<p><u>&iquest;Olvidaste la contrase&ntilde;a? </u></p>",
                "<p>Para cambiar o agregar una foto de perfil, toca tu foto o el c&iacute;rculo blanco. Si tienes una cuenta de conductor, puedes actualizar tu foto de perfil all&iacute;.&nbsp;</p>",
                "<p><u>&iquest;No te ha llegado un mensaje de texto de verificaci&oacute;n?</u></p>"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Guía de Dr. Chapp",
      "content": [
        {
          "name": "Prueba",
          "content": [
            {
              "name": "Olvidé mi contraseña",
              "content": [
                {
                  "title": "Olvidé mi contraseña",
                  "text": ["<p>Si olvidas tu contrase&ntilde;a, accede al siguiente enlace para restablecerla. Deber&aacute;s introducir la direcci&oacute;n de email o el n&uacute;mero de m&oacute;vil asociado a tu cuenta de Dr.Chapp.</p>",
                    "<p>Recibir&aacute;s un email en unos minutos. El email incluye un enlace para restablecer la contrase&ntilde;a que solo se puede utilizar una vez. Si no abres el enlace en un plazo de 10 minutos, tendr&aacute;s que volver a empezar para recibir un enlace nuevo.</p>",
                    "<p>Recomendamos utilizar una contrase&ntilde;a exclusiva para Dr.Chapp. No compartas tu contrase&ntilde;a por email ni por ning&uacute;n otro medio. El equipo de soporte de Dr.Chapp nunca te preguntar&aacute; la contrase&ntilde;a.</p>",
                    "<p>Si no puedes restablecer la contrase&ntilde;a o acceder a tu cuenta, contacta con nosotros a trav&eacute;s de Cuenta y pago &gt; No puedo iniciar sesi&oacute;n &gt; El enlace para restablecer mi contrase&ntilde;a no funciona.</p>",
                    "<p><u>Olvid&eacute; mi contrase&ntilde;a</u></p>"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Prueba",
          "content": [
            {
              "name": "Olvidé mi contraseña",
              "content": [
                {
                  "title": "Olvidé mi contraseña",
                  "text": ["<p>Si olvidas tu contrase&ntilde;a, accede al siguiente enlace para restablecerla. Deber&aacute;s introducir la direcci&oacute;n de email o el n&uacute;mero de m&oacute;vil asociado a tu cuenta de Dr.Chapp.</p>",
                    "<p>Recibir&aacute;s un email en unos minutos. El email incluye un enlace para restablecer la contrase&ntilde;a que solo se puede utilizar una vez. Si no abres el enlace en un plazo de 10 minutos, tendr&aacute;s que volver a empezar para recibir un enlace nuevo.</p>",
                    "<p>Recomendamos utilizar una contrase&ntilde;a exclusiva para Dr.Chapp. No compartas tu contrase&ntilde;a por email ni por ning&uacute;n otro medio. El equipo de soporte de Dr.Chapp nunca te preguntar&aacute; la contrase&ntilde;a.</p>",
                    "<p>Si no puedes restablecer la contrase&ntilde;a o acceder a tu cuenta, contacta con nosotros a trav&eacute;s de Cuenta y pago &gt; No puedo iniciar sesi&oacute;n &gt; El enlace para restablecer mi contrase&ntilde;a no funciona.</p>",
                    "<p><u>Olvid&eacute; mi contrase&ntilde;a</u></p>"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  aux: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public helpService: HelpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  ngOnInit(){
    this.getHelpPatientOptions();
    this.getLastConsultationDetails();
  }
  getHelpPatientOptions(){
    this.helpService.helpPatientOptions().subscribe (
			data => {
        this.helpInfo = data;
				console.log(data);
			}
		);
  }
  getLastConsultationDetails(){
    this.helpService.lastConsultationDetails().subscribe (
			data => {
        this.helpLastConsultationInfo = data;
				console.log(data);
			}
		);
  }

  details(){
    //console.log(this.HelpInfo);
    this.navCtrl.push(ConsultationDetailsPage, { data: this.helpLastConsultationInfo['content'] });
  }

  cuentaYpago(){
    //console.log(this.HelpInfo);
    this.navCtrl.push(HelpListPage, { data: this.helpInfo['0']['content'] });
  }

  guides(){
    console.log("!@#!@#!@#!@#!@#!@#!");
    this.navCtrl.push(HelpListPage, { data: this.helpInfo[1]['content'] });
  }

  modalPage(){
    this.navCtrl.push(ModalTestPage);
  }

}
