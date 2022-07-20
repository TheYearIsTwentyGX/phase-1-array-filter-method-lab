// Code your solution here
const findMatching = (drivers, name) => drivers.filter(d => d.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (drivers, begin) => drivers.filter(d => d.startsWith(begin));

const matchName = (drivers, name) => drivers.filter(d => d.name === name);