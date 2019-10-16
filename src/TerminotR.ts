import { Observable } from 'rxjs';

export class TerminotR {
    private elements: {[key:string]: HTMLElement};
    private terms: Term[];

    constructor() { }

    loadTerms(): Promise<Term[]> {
        const terms: Term[] = [
            { id: 1, name: 'Test 1', description: 'lorem ipsum dolor' },
            { id: 2, name: 'asdjkhd asd', description: 'lorem ipsum dolor' },
            { id: 3, name: 'sd asdsad', description: 'lorem ipsum dolor' },
        ];
        return new Promise(resolve => {
            setTimeout(() => resolve(this.terms = terms), 1000);
        });
    }

    renderPreviews(terms: Term[]) {
        this.elements.previews.innerHTML = '';
        const html = terms
            .map(term => this.previewHtml(term))
            .join('');
        this.elements.previews.innerHTML = html;
    }

    renderDetail(term: Term) {
        this.elements.detailName.innerHTML = term.name;
        this.elements.detailDescription.innerHTML = term.description;
    }

    showDetail(termId: number) {
        const term = this.terms
            .find(term => term.id === termId);
        this.renderDetail(term);
        this.elements.detail.classList.toggle('active', true);
    }

    closeDetail() {
        this.elements.detail.classList.toggle('active', false);
    }

    previewHtml(term: Term) {
        return `
            <div class="term-preview" onclick="app.showDetail(${term.id})">
                <div class="name">${term.name}</div>
                <div>></div>
            </div>
        `;
    }

    load() {
        this.elements = {
            previews: document.querySelector('.previews'),
            detail: document.querySelector('.detail'),
            detailName: document.querySelector('.detail .name'),
            detailDescription: document.querySelector('.detail .description'),
        };
    }
}

export interface Term {
    id: number;
    name: string;
    description: string;
}