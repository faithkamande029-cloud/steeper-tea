export async function fetchTeas(url) {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Server returned ${response.status}`);
  }

  const data = await response.json();
  if (Array.isArray(data)) {
    return data;
  }
  if (data && typeof data === "object" && Array.isArray(data.teas)) {
    return data.teas;
  }

  throw new Error("Tea data must be an array or an object containing a teas array");
}
