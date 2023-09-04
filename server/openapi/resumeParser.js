import child_process from 'child_process';

// run_script("python", ["main.py","extract","Resume.pdf"], function(output, exit_code) {
//     console.log("Process Finished.");
//     console.log('closing code: ' + exit_code);
//     console.log('Full output of script: ',output);
// });

// console.log ("Continuing to do node things while the process runs at the same time...");

// This function will output the lines from the script 
// AS is runs, AND will return the full combined output
// as well as exit code when it's done (using the callback).

export default function run_script(command, args, callback) {
    console.log("Starting Process.");
    var child = child_process.spawn(command, args);

    var scriptOutput = "";

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);

        data=data.toString();
        scriptOutput+=data;
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function(data) {
        console.log('stderr: ' + data);

        data=data.toString();
        scriptOutput+=data;
    });

    child.on('close', function(code) {
        callback(scriptOutput,code);
    });
}
