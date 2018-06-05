if (window.commaship) {
  commaship.register('World Greeter', [
    {
      id: 'greet',
      action: function() { alert('Hello World!'); },
      label: 'Greet planet',
      description: 'This salutes the whole world at once! Incredible technology ahead!',
    }
  ])
} else {
  console.warn('Commaship not loaded');
}
