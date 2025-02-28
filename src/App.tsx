import { Divider } from './components/Divider';
import { Knowledges } from './components/Knowledges';
import { Topic } from './components/Topic';
import './styles/global.scss';

import { useContext } from 'react';
import {
	RiGithubFill,
	RiLinkedinFill,
	RiMailFill,
	RiPhoneFill,
} from 'react-icons/ri';
import { Header } from './components/Header';
import { Project } from './components/Project';
import { LocationContext } from './contexts/LocationContext';

document.title = 'Portfolio Gabriel Ribeiro';

function App() {
	const { db } = useContext(LocationContext);

	const knowledge = db.knowledge.content.sort((a, b) => {
		if (a.rating > b.rating) {
			return -1;
		}
		if (a.rating < b.rating) {
			return 1;
		}
		return 0;
	});

	return (
		<div>
			<Header />

			<main className="max-w-6xl mx-auto my-0 mt-24 mb-8 py-0 px-6">
				<h1 className="text-primary max-w-[1000px] font-bold text-5xl mb-10">
					{db.main.title}
				</h1>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
					<div className="text-white mx-auto my-0 text-lg">
						{db.main.content.map((content) => (
							<p key={content}>{content}</p>
						))}
					</div>
					<div>
						<img
							className="text-white mx-auto my-0 text-lg"
							src="https://github.com/ogrds.png"
							alt="Gabriel Ribeiro"
						/>
					</div>
				</section>

				<Divider id="skills" text={db.main.sections.skills} />

				<Topic title={db.knowledge.title}>
					<section className="evaluation">
						{knowledge.map((knowledge) => {
							if (knowledge.show) {
								return (
									<Knowledges
										key={knowledge.name}
										img={knowledge.photo}
										name={knowledge.name}
										rating={knowledge.rating}
									/>
								);
							}

							return null;
						})}
					</section>
				</Topic>

				<Topic title={db.learning.title} subtitle={db.learning.subtitle}>
					<section className="evaluation">
						{db.learning.content.map((learning) => {
							if (learning.show) {
								return (
									<Knowledges
										key={learning.name}
										img={learning.photo}
										name={learning.name}
										rating={learning.rating}
									/>
								);
							}

							return null;
						})}
					</section>
				</Topic>

				<Topic title={db.languages.title}>
					<section className="evaluation">
						{db.languages.content.map((language) => {
							if (language.show) {
								return (
									<Knowledges
										key={language.name}
										img={language.photo}
										status={language.status}
										name={language.name}
										rating={language.rating}
									/>
								);
							}

							return null;
						})}
					</section>
				</Topic>

				<Divider id="projects" text={db.main.sections.projects} />

				<Topic>
					<section className="text-white grid grid-cols-1 md:grid-cols-2 gap-8">
						{db.projects.map((project) => {
							if (project.show) {
								return (
									<Project
										key={project.title}
										title={project.title}
										specification={project.specification}
										definition={project.definition}
										link={!!project.link ? project.link : undefined}
									/>
								);
							}

							return null;
						})}
					</section>
				</Topic>
			</main>
			<footer className="bg-[#1c2c35] text-white" id="contact">
				<section className="grid grid-cols-1 md:grid-cols-2 gap-8 item-center justify-between mx-auto my-0 max-w-6xl px-6 py-12">
					<div className="flex items-center justify-center">
						<span className="block">{db.footer.developed}</span>
					</div>
					<div className="flex items-center justify-center flex-col">
						<div className="mb-8">
							<span className="flex mb-2 gap-2 items-center justify-center">
								<RiMailFill /> <span>gabrielrsilva98@gmail.com</span>
							</span>
							<span className="flex mb-2 gap-2 items-center justify-center">
								<RiPhoneFill /> <span>+55 (61) 98501-7742</span>
							</span>
						</div>

						<span className="flex mb-2 gap-2 items-center justify-center">
							<a
								href="https://www.linkedin.com/in/grds/"
								target="_blank"
								rel="noreferrer"
							>
								<RiLinkedinFill fontSize="1.2rem" />
							</a>
							<a
								href="https://github.com/ogrds"
								target="_blank"
								rel="noreferrer"
							>
								<RiGithubFill fontSize="1.2rem" />
							</a>
						</span>
					</div>
				</section>
			</footer>
		</div>
	);
}

export default App;
