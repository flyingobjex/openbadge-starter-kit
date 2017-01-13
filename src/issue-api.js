/**
 * Created by Steve Hendricks on 13/01/2017.
 */

export async function checkApi() {
  var body = await request.get('https://api.github.com/repos/scottwrobinson/camo');
  console.log('Body:', body);
}