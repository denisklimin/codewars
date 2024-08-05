function getMiddle(s)
{
  //Code goes here!
  const split = s.split('')
  let len = split.length
  let mid = Math.round(len / 2)
  if(len % 2 == 0) {
    return `${split[mid-1]}${split[mid]}`
  } return `${split[mid-1]}`
}