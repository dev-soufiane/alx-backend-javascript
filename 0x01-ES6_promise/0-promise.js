export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const checker = true;
    if (checker) {
      resolve('Success');
    } else {
      reject(new Error('Failed'));
    }
  }).catch((error) => console.error(error));
}
