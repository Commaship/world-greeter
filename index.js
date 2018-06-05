
if (window.commaship) {
  commaship.register('World Greeter', [
    {
      id: 'greet',
      action: function() { alert('Hello World!'); },
      label: 'Greet planet',
      description: 'This salutes the whole world at once! Incredible technology ahead!',
    },
    {
      id: 'complex-async-example',
      label: 'Complex async example',
      description: 'Lookup the number of stars in any getkirby repo',
      action: function() {
        return new Promise(async (resolve, reject) => {
          const repos = await fetch('https://api.github.com/orgs/getkirby/repos').then(r => r.json())
          const newOptions = repos.map(r => ({
            label: r.name,
            description: r.description,
            action: () => alert(`${r.name} has ${r.stargazers_count} stars.`)
          }))
          resolve(newOptions)
        })
      }
    }
  ])
} else {
  console.warn('Commaship not loaded');
}
