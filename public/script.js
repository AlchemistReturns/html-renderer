document.addEventListener('DOMContentLoaded', () => {  
    const textarea = document.getElementById('markdown-input');
    const preview = document.getElementById('html-preview');
  
    textarea.addEventListener('input', () => {
      const markdownText = textarea.value;
      preview.innerHTML = marked.parse(markdownText);
    });
  });
  