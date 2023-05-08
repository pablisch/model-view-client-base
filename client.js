class Client {
  async loadX() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');

      if (response.status === 404) { 
        throw new Error(`All that was found was disappointment - status ${response.status}`)
      } else if (response.status === 500) {
        throw new Error(`Server Error - status ${response.status}`)
      } else if (!response.ok) {
        throw new Error(`Computer says no: ${response.status}`)
      }

      const data = await response.json();
      // console.log(data) // VISIBILITY
      const array = data.map(item => {
        return {
          title: item.title,
          body: item.body,
        };
      });
      return array
    } catch (error) {
      throw new Error(`Network is sleeping: ${error.message}`);
    }
  }
}

module.exports = Client;

