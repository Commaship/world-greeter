
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
            action: () => `${r.name} has ${r.stargazers_count} stars.`
          }))
          resolve(newOptions)
        })
      }
    },
    {
      id: 'user-interaction-example',
      label: 'User interaction example',
      description: 'This is a demo for user interaction dialogues',
      action: function () {
        return new commaship.Dialogue(function*() {
          const name      = yield new commaship.Question('What\'s your first name?')
          const lastname  = yield new commaship.Question('What\'s your last name?')

          yield `That's a very nice name, ${name} ${lastname}!`

          let count = parseInt(yield new commaship.Question('How many times do you want to be greeted?'))

          if(count < 1) {
            yield `I'll just greet you a 100 times, ${name}!`
            count = 100
          }

          let greetings = ''
          for(let i = 0; i < count; i++) {
            greetings += `Hello ${name} ${lastname}\n`
          }
          return greetings

        })
      }
    }
  ])
} else {
  console.warn('Commaship not loaded');
}
