const LinksSocialMedia = {
  youtube: 'naotem',
  facebook: 'caioherbertt',
  github: 'caioherbertt',
  instagram: 'caio.herbertt'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https:/${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
    })
}
getGitHubInfo()
