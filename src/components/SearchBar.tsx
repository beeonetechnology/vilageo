import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users, Sparkles } from "lucide-react";

export const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    startDate: "",
    travelers: "2"
  });

  const handleSearch = () => {
    // Navigate to packages page with search filters
    window.location.href = "/packages";
  };

  return (
    <Card className="w-full max-w-5xl mx-auto glass-card animate-fade-up bg-white/10 backdrop-blur-xl border-white/20">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Destination */}
          <div className="relative group">
            <label className="block text-sm font-semibold mb-3 text-white/90 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-light" />
              Where to?
            </label>
            <Input
              placeholder="Search destinations..."
              value={searchData.destination}
              onChange={(e) => setSearchData(prev => ({ ...prev, destination: e.target.value }))}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 text-lg rounded-2xl backdrop-blur-sm focus:bg-white/20 transition-all duration-300 hover:bg-white/15"
            />
          </div>

          {/* Check-in Date */}
          <div className="group">
            <label className="block text-sm font-semibold mb-3 text-white/90 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary-light" />
              Departure Date
            </label>
            <Input
              type="date"
              value={searchData.startDate}
              onChange={(e) => setSearchData(prev => ({ ...prev, startDate: e.target.value }))}
              className="bg-white/10 border-white/20 text-white h-14 text-lg rounded-2xl backdrop-blur-sm focus:bg-white/20 transition-all duration-300 hover:bg-white/15"
            />
          </div>

          {/* Travelers */}
          <div className="group">
            <label className="block text-sm font-semibold mb-3 text-white/90 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-light" />
              Travelers
            </label>
            <Select value={searchData.travelers} onValueChange={(value) => setSearchData(prev => ({ ...prev, travelers: value }))}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white h-14 text-lg rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-xl border-white/20">
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4 Travelers</SelectItem>
                <SelectItem value="5">5+ Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button 
              onClick={handleSearch} 
              className="w-full h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Search className="w-5 h-5 mr-3" />
              Search Magic
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};