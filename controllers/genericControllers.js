const ChildProcess = require('./../services/childProcess');

class Controladores {

    // Endpoint para recibir las notificaciones de Twitch
    static twichWebhook(req, res) {
        // Procesa la notificación recibida de Twitch
        const notification = req.body;

        //TODO filtrar evento en archivo procesos.json
        let comando = 'dir';

        //Lanzar el comando recogido en el archivo procesos.json
        const childProcess = new ChildProcess();
        childProcess.lanzarComando(comando);

        // Realiza las acciones necesarias con la notificación
        console.log('Notificación recibida:', notification);

        // Responde con un código 200 para confirmar la recepción de la notificación
        res.sendStatus(200);
    }

}

module.exports = Controladores;
