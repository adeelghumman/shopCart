export interface Product {
    name: string;
    description: string;
    createdDate: Date | null;
    createdBy: string;
    image: string;
    inStoke: boolean;
    price: number;
}