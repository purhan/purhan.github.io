{% assign entries_layout = 'grid' %}
<div class="entries-grid">
  {% include documents-collection.html collection='projects' sort_by=page.sort_by sort_order=page.sort_order type=entries_layout %}
</div>
