import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { destinations } from "@/data/mockData";
import { Filter, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  onFilter: (filters: any) => void;
}

export const FilterBar = ({ onFilter }: FilterBarProps) => {
  const [filters, setFilters] = useState({
    destination: "all",
    duration: "all",
    priceRange: [0, 5000],
    sortBy: "popularity"
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      destination: "all",
      duration: "all",
      priceRange: [0, 5000],
      sortBy: "popularity"
    };
    setFilters(defaultFilters);
    onFilter(defaultFilters);
  };

  return (
   <Card className="card-shadow bg-transparent">
  <CardContent className="p-6">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-lg text-gray-200">Filter Packages</h3>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Destination Filter */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-200">Destination</label>
       <Select
  value={filters.destination}
  onValueChange={(value) => handleFilterChange("destination", value)}
>
  <SelectTrigger className="bg-green-800 text-gray-200">
    <SelectValue placeholder="All Destinations" />
  </SelectTrigger>
  <SelectContent className="bg-green-800 text-gray-200">
    <SelectItem value="all" className="text-gray-400">All Destinations</SelectItem>
    {destinations.map((dest) => (
      <SelectItem
        key={dest.name}
        value={dest.name.toLowerCase()}
        className="text-white"
      >
        {dest.name}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

      </div>

      {/* Clear Filters */}
      <div className="flex items-end">
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full bg-transparent text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  </CardContent>
</Card>


  );
};