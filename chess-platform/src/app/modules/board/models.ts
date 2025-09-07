// Ensure the correct path and export for FENChar
import { FENChar } from "../../logic/models"
// If the correct path is different, update accordingly.

type SquareWithPiece = {
    piece: FENChar;
    x: number;
    y: number;
}

type SquareWithoutPiece = {
    piece: null;
}

export type SelectedSquare = SquareWithPiece | SquareWithoutPiece;

export const columns = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;