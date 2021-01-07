import {saveAs} from 'file-saver'
export function download (file) {
    saveAs(file)
}