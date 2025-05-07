function Calculadora(){
    this.display = document.querySelector('.display')

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target

            //Adicionarnatela
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);

            //Apagarcaracter
            if (el.classList.contains('btn-apagar')) this.apagarNum()

            //Igual
            if(el.classList.contains('btn-equal')) this.equal()

            //Limpar tudo
            if (el.classList.contains('btn_clear')) this.clean()
    })}

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.inicia = () => {
        this.capturaCliques()
        this.capturaEnter()
    }

    this.clean = () => this.display.value = ""; this.display.focus()
    this.apagarNum = () => this.display.value = this.display.value.slice(0, -1); this.display.focus()
    this.capturaEnter = () => {
        display.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return
            else this.equal()
        })
    }

    this.equal = ()=>{
        let conta = this.display.value;
        try{
            conta = eval(conta)

            if(!conta){
            alert('conta inválida')
            return
            }

            this.display.value = conta
        } catch(e){
            alert("Conta inválida")
            return
        }
}
}
const calculadora = new Calculadora()
calculadora.inicia()