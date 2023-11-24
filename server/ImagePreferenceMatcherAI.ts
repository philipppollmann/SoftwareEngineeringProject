
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

console.log("test");
function levenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = a[j - 1] === b[i - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[b.length][a.length];
}

export function matchImage(color: string, category: string): string {
    let bestMatch: AIImage | undefined;
    let bestMatchScore: number = Number.MAX_VALUE;

    for (const image of imagesArray) {
        const colorDifference = levenshteinDistance(color, image.getColor());
        const categoryDifference = levenshteinDistance(category, image.getCategory());

        const totalDifference = colorDifference + categoryDifference;

        if (totalDifference < bestMatchScore) {
            bestMatchScore = totalDifference;
            bestMatch = image;
        }
    }

    if (bestMatch) {
        return `assets/img/${bestMatch.getName()}.jpg`;
    } else {
        return "assets/img/default.jpg";
    }
}

console.log(matchImage('white', 'car'));