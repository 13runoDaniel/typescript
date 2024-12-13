/* CASTING */
namespace casting {
    let idade: any = 30;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x)
    })

    let nome: string = 30 as unknown as string
}