const BASE_URL = process.env.BASE_URL || "";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

class ProductApi {
  static token: string;

  static async request<TData = {}>(
    endpoint: string,
    data?: TData,
    method: string = "GET",
    token?: string
  ): Promise<TData[]> {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const body = method === "GET" ? undefined : data;
    const headers = {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    };
    url.search =
      method === "GET" ? new URLSearchParams(data as {}).toString() : "";

    let res;

    if (method === "GET") {
      res = await fetch(url, {
        method,
        headers,
      });
    }
    res = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers,
    });

    if (!res.ok) {
      console.log("API ERROR", res.statusText, res.status);
      const { error } = await res.json();
      throw Array.isArray(error) ? error : [error];
    }
    const result = await res.json();
    return result;
  }

  static async getProducts() {
    const res = await ProductApi.request<TProduct>("products");
    return res;
  }
  static async getSingleProduct(id: string | number) {
    const res = await ProductApi.request<TProduct>(`products/${id}`);
    return res;
  }
}

ProductApi.getProducts().then((data) => {
  console.log(data);
});
ProductApi.getSingleProduct(2).then((data) => {
  console.log(data);
});
