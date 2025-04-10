const VISION5E_PRECISE_DETECTION_LEVELS = 2;

export function tokenHasVision(token){
    // tokenHasVision is derived from the detectionLevel property used by the Vision5e module 
    return !this.token?.detectionLevel || this.token?.detectionLevel === VISION5E_DETECTION_LEVELS.PRECISE;      
}