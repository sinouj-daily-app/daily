export class ApiService {
    public get = async (url: string): Promise<any> => {
        return await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    public post = async (url: string, data: any): Promise<any> => {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    public put = async (url: string, data: any): Promise<any> => {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    public delete = async (url: string): Promise<any> => {
        return await fetch(url, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    public patch = async (url: string, data: any): Promise<any> => {
        return await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
}