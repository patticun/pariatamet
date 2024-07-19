const vlOnlyConfigTypes = [
  // This array contains configuration types that are specific to Vega-Lite.
  // Note: Vega technically has axisBand configuration, but we will handle it separately.
  
  'width',          // Width of the visualization
  'height',         // Height of the visualization
  'mark',           // Mark properties
  'encoding',       // Encoding channel definitions
  'layer',          // Layered views
  'facet',          // Faceted views
  'repeat',         // Repeated views
  'resolve',        // Resolve rules for scales, axes, and legends
  'title',          // Title of the visualization
  'view',           // View properties
  'selection',      // Selection properties
  // Add other Vega-Lite specific configurations as needed
];

// Example usage:
console.log(vlOnlyConfigTypes);
