function TextButton(params) {
    let obj = {
        name: "João",
        age: 30,
        address: "Rua João Pedro",
        phoneNumber: "11949499303"
    }

    console.log(params);
    console.log(obj.name);

    return(
        <button type="button">
            {params.label}
        </button>
    )
}

export default TextButton