import { useState, useEffect, useMemo } from "react";

interface UseFilterProps<T> {
    items: T[];
}

interface UseFilterResult<T> {
    filteredItems: T[];
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const useFilter = <T>({ items }: UseFilterProps<T>): UseFilterResult<T> => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const debouncedQuery = useDebounce(searchQuery, 800);

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            JSON.stringify(item).toLowerCase().includes(debouncedQuery.toLowerCase())
        );
    }, [items, debouncedQuery]);

    return { filteredItems, setSearchQuery };
};

// Debounce Hook to avoid excessive re-renders
const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

export default useFilter;
