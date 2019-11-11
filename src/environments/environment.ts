export const environment = {
  production: false,
  baseUrl: window.location.origin, // Base URL here
  apiUrl: 'http://local.brn.rajoriya/api', // global API URL (for production build)
  adminApiUrl: 'http://local.brn.rajoriya/api/admin',
  
  BASE_URI: 'https://azapp-tektrak-mobileappservices-poc.azurewebsites.net',
  FEED_BASE_URI: 'https://azfn-tektrak-sessionfeed-poc.azurewebsites.net',
  GET_EASYAUTH_PATH: '/.auth/login/{provider}?response_type=token',
  GET_USERPROFILE_PATH: '/tables/UserProfile',
  //config.GET_FOLLOWING_PATH: '/api/members/{userId}/Following';
  GET_FOLLOWING_PATH: '/api/members',
  GET_SESSIONS_PATH: '/api/sessions?userId={userId}',
  GET_SESSION_PATH: '/api/sessions/{sessionId}/Points',
  GET_SESSIONPOINTS_PATH: '/api/sessions/{sessionId}/Points?timestampTo={timestampTo}',
  
  // constants
  MOUSE_BOUNDSINFLATE: 200,
  PROVIDER_GOOGLE: 'google',
  PROVIDER_AAD: 'aad',
  ORCHESTRATION_VIDEO: 0,
  ORCHESTRATION_TIMER: 1
};