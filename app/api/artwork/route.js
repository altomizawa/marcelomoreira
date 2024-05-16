export async function GET() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/122');
    if(!result.ok) {
      throw new Error('Failed to fetch data')
    } 
    const parsedResult = await result.json();
    return Response.json(parsedResult)
}


// export async function POST() {
//   const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//   const parsedResult = await result.json();
//   return Response(parsedResult)
// }
