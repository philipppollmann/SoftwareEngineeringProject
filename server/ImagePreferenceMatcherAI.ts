import {th} from "vuetify/locale";

class AIImage {
    private name: string;
    private color: string;
    private category: string;

    constructor(name: string, color: string, category: string) {
        this.name = name;
        this.color = color;
        this.category = category;
    }

    getName(): string{
        return this.name;
    }

    getColor(): string {
        return this.color;
    }

    getCategory(): string {
        return this.category;
    }
}

const imagesArray: AIImage[] = [
    new AIImage('anime','white', 'japan'),
    new AIImage('bird', 'brown', 'nature'),
    new AIImage('butterfly', 'colorful', 'nature'),
    new AIImage('cars', 'grey', 'car'),
    new AIImage('flamingo', 'pink', 'nature'),
    new AIImage('flower', 'colorful', 'nature'),
    new AIImage('flowerwhite', 'white', 'nature'),
    new AIImage('mountains', 'green', 'nature'),
];

function getImageByName(name: string): AIImage | undefined {
    return imagesArray.find(image => image.getName() === name);
}


function matchImage(color: string, category: string): string{
    let bestMatch: AIImage | undefined;


    return "assets/img/bird.jpg";
}

