const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IPost {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getData = async (url: string): Promise<IPost[]> => {
  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error('error');
  }
  const body: IPost[] = await response.json();
  return body;
}

getData(COMMENTS_URL)
  .then(data => {
    data.forEach((el) => {
      console.log(`ID ${el.id}, Email: ${el.email}`);
    })
  }).catch((err: Error) => console.log(err.message));

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */