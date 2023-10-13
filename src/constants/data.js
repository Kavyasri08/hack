import images from './images';

const wines = [
  {
    title: 'Attention',
    
    tags: 'Cartoon Matching Game',
  },
  {
    title: 'Reasoning',
    
    tags: 'Quiz Game',
  },
  {
    title: 'Decision Making',
    
    tags: 'XO Game',
  },
  {
    title: 'Problem Solving',
    
    tags: 'Rate in a Maze',
  },
  {
    title: 'Analysing',
    
    tags: 'Connection Game',
  },
];

const cocktails = [
  {
    title: 'Understanding',
   
    tags: 'Paragraph Reading ',
  },
  {
    title: "Critical Thinking",
    
    tags: 'Spot the difference',
  },
  {
    title: 'Communication',
    
    tags: 'Mind Map',
  },
 
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Disability',
    subtitle: 'Start with the disability and work on it',
  },
  {
    imgUrl: images.award02,
    title: 'Activity',
    subtitle: 'Do activities related to the disability that will retrain the abilities',
  },
  {
    imgUrl: images.award03,
    title: 'EEG Feedback',
    subtitle: 'Take feedback to analyse your level',
  },
 
];

export default { wines, cocktails, awards };
