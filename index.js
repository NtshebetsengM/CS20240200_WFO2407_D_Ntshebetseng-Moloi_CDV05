// Open Modal with specific project content
function openModal(projectId, event) {
  event.preventDefault(); // Prevents the page from scrolling to the top

  // Show the modal
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';

  // Hide all project content inside the modal
  const allProjects = document.querySelectorAll('.modal-project');
  allProjects.forEach(project => project.classList.remove('active'));

  // Show the specific project content based on the ID
  const projectContent = document.getElementById(projectId);
  projectContent.classList.add('active');
}

// Close the modal
function closeModal(event) {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
