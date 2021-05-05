/**
 * 犬種の文字列を受け取り、fetch関数を使ってDog APIからその犬種の画像URLのリストを取得する
 * @param {*} breed 
 */
export async function fetchImages(breed) {
    const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/12`
    );
    const data = await response.json();
    return data.message;
}
