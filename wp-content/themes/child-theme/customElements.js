class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class ChooseSide extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="Kit-Maker">Kit Maker </a> &nbsp <a href="Kit-Developer"> Kit Developer</a>`
	}
}

customElements.define("x-choose", ChooseSide);