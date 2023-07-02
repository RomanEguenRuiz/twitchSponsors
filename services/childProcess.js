const { exec } = require('child_process');

class ChildProcess {
    lanzarComando(comando) {
        exec(`start cmd /k ${comando}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al abrir la ventana de CMD: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error al abrir la ventana de CMD: ${stderr}`);
                return;
            }

            console.log('Ventana de CMD abierta.');
        });
    }
}

module.exports = ChildProcess;
