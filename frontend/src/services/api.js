/**
 * ==================================================================================
 * API LAYER
 * ==================================================================================
 * Currently uses mock data.
 * TODO: Replace with axios/fetch calls to Django REST Framework endpoints.
 */

export const api = {
    submitContactForm: async (data) => {
        console.log("Submitting to Django:", data);
        // Simulate network delay
        return new Promise((resolve) => setTimeout(resolve, 1500));
    },

    getLatestVersion: () => {
        return "1.2.0";
    }
};