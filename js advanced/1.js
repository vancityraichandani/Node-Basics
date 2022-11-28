let val = 2.1


let result = async () => {
    if (val == 2) {
        return (val);
    } else {
        return ("error boy");
    }
}

result().then((data) => console.log('resssolve ' + data)).catch((err) => console.log(err))