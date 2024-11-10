class ModalComponent extends HTMLElement {
  constructor() {
    super();
  
    // Attach a shadow DOM to encapsulate styles and structure
    this.attachShadow({ mode: 'open' });
  
    // Modal Template
    this.shadowRoot.innerHTML = `
        <style>
          /* Modal (overlay) */
          .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          /* Modal Content */
          .modal-content {
            background-color: white;
            padding: 20px;
            max-width: 90vw;
            max-height: 90vh;
            overflow-: non;
            position: relative;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          /* Close Button */
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
          }
        </style>
  
        <div class="modal-overlay">
          <div class="modal-content">
            <span class="close-btn">&times;</span>
            <slot></slot> <!-- Slot for custom content -->
          </div>
        </div>
      `;
  }
  
  connectedCallback() {
    // Element references
    this.modalOverlay = this.shadowRoot.querySelector('.modal-overlay');
    this.closeBtn = this.shadowRoot.querySelector('.close-btn');
  
    // Event listeners
    this.closeBtn.addEventListener('click', () => this.hide());
  }
  
  // Method to show the modal
  show() {
    this.modalOverlay.style.display = 'flex';
  }
  
  // Method to hide the modal
  hide() {
    this.modalOverlay.style.display = 'none';
  }
}
  
// Define the custom element
customElements.define('modal-component', ModalComponent);
  