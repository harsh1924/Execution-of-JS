{
    let a;
    console.log(a);
    a = 10;
    console.log(a);
}
{
    var b;
    console.log(b);
    b = 20;
    console.log(b);
}

{
    // console.log(c);
    const c = 30;
    console.log(c);
}

// OUTPUT: undefined
//         10
//         undefined
//         20
//         Reference Error
//         30