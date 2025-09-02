
import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project, ProjectCategory } from '../types';

const categories = Object.values(ProjectCategory);

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') {
            return PROJECTS_DATA;
        }
        return PROJECTS_DATA.filter(p => p.category === filter);
    }, [filter]);

    const handleSelectProject = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">My Work</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    <button
                        onClick={() => setFilter('All')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${filter === 'All' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${filter === category ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => handleSelectProject(project)}>
                            <img src={project.images[0]} alt={project.title} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-cyan-400 text-sm">{project.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={handleCloseProject}>
                        <div className="bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-full overflow-y-auto" onClick={e => e.stopPropagation()}>
                           <div className="p-6 md:p-8">
                                <div className="flex justify-between items-start mb-4">
                                     <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                                     <button onClick={handleCloseProject} className="text-gray-400 hover:text-white text-3xl">&times;</button>
                                </div>
                                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                    {selectedProject.images.map((img, index) => (
                                        <img key={index} src={img} alt={`${selectedProject.title} - view ${index + 1}`} className="w-full h-auto rounded-md object-cover" />
                                    ))}
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold text-cyan-400 mb-2">Description</h4>
                                        <p>{selectedProject.description}</p>
                                        <p className="mt-2"><span className="font-medium text-gray-400">Context:</span> {selectedProject.context}</p>
                                    </div>
                                    <div>
                                         <h4 className="font-semibold text-cyan-400 mb-2">Project Details</h4>
                                         <ul>
                                             <li><span className="font-medium text-gray-400">Client:</span> {selectedProject.client}</li>
                                             <li><span className="font-medium text-gray-400">Role:</span> {selectedProject.role}</li>
                                             <li className="flex items-start"><span className="font-medium text-gray-400 mr-2">Tools:</span> 
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.tools.map(tool => (
                                                        <span key={tool} className="bg-gray-700 text-xs px-2 py-1 rounded-full">{tool}</span>
                                                    ))}
                                                </div>
                                             </li>
                                         </ul>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Portfolio;
