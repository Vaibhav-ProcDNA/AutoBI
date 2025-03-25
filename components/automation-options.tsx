"use client"

import type React from "react"
import { useState } from "react"
import { FileUp, Figma } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

export default function AutomationOptions() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [figmaLink, setFigmaLink] = useState("")
  const [tableauFile, setTableauFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setTableauFile(file)
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedOption === "figma") {
      console.log("Figma link submitted:", figmaLink)
    } else if (selectedOption === "tableau") {
      console.log("Tableau file submitted:", tableauFile)
    }
  }

  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card className="cursor-pointer transition-all hover:shadow-md" onClick={() => setSelectedOption("figma")}>
        <CardHeader className={`${selectedOption === "figma" ? "bg-primary/10" : ""}`}>
          <CardTitle className="flex items-center gap-2">
            <Figma className="h-5 w-5" />
            Figma to Power BI
          </CardTitle>
          <CardDescription>Convert your Figma designs into interactive Power BI dashboards</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            Provide your Figma link and we'll transform your design into a Power BI dashboard.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Select</Button>
        </CardFooter>
      </Card>

      <Card className="cursor-pointer transition-all hover:shadow-md" onClick={() => setSelectedOption("tableau")}>
        <CardHeader className={`${selectedOption === "tableau" ? "bg-primary/10" : ""}`}>
          <CardTitle className="flex items-center gap-2">
            <FileUp className="h-5 w-5" />
            Tableau to Power BI
          </CardTitle>
          <CardDescription>Migrate your Tableau workbooks to Power BI format</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            Upload your Tableau TWB file and we'll convert it to a Power BI PBIX file.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Select</Button>
        </CardFooter>
      </Card>

      <Dialog open={!!selectedOption} onOpenChange={() => setSelectedOption(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedOption === "figma" ? "Enter Your Figma Link" : "Upload Your Tableau File"}
            </DialogTitle>
            <DialogDescription>
              {selectedOption === "figma"
                ? "Provide the link to your Figma design file"
                : "Upload your Tableau TWB file to convert"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            {selectedOption === "figma" ? (
              <div className="space-y-2">
                <Label htmlFor="figma-link">Figma Link</Label>
                <Input
                  id="figma-link"
                  type="url"
                  placeholder="https://www.figma.com/file/..."
                  value={figmaLink}
                  onChange={(e) => setFigmaLink(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Ensure your Figma file is set to public or has proper sharing permissions.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="tableau-file">Tableau TWB File</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="tableau-file"
                    type="file"
                    accept=".twb"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("tableau-file")?.click()}
                    className="w-full"
                  >
                    {fileName || "Choose file"}
                  </Button>
                </div>
                {fileName && <p className="text-xs text-muted-foreground">Selected file: {fileName}</p>}
              </div>
            )}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setSelectedOption(null)}>Cancel</Button>
              <Button type="submit">Process</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
