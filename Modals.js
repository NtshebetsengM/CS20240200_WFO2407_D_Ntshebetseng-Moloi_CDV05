const project1 = document.getElementById('project1')
const project2 = document.getElementById('project2')
const project3 = document.getElementById('project3')

// Add event listeners for each project button
project1.addEventListener('click', (event) => openModal('project1Modal', event));
project2.addEventListener('click', (event) => openModal('project2Modal', event));
project3.addEventListener('click', (event) => openModal('project3Modal', event));

// Open Modal with specific project content
function openModal(modalContentId, event) {
  event.preventDefault(); // Prevents page scrolling

  // Show the modal
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';

  // Hide all project content inside the modal
  const allProjects = document.querySelectorAll('.modal-content > div');
  allProjects.forEach(project => project.classList.add('hidden')); // Hide all modal content

  // Show the specific project content based on the ID
  const projectContent = document.getElementById(modalContentId);
  if (projectContent) {
    projectContent.classList.remove('hidden'); // Show the correct content
  }
}

// Close the modal functionality
const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none'; // Hide the modal
});

// Close the modal
document.getElementById('close-btn').addEventListener('click', (event)=>{
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
})

